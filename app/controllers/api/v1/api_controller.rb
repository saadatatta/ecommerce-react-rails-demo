module Api
  module V1
    class ApiController < ApplicationController

      include DeviseTokenAuth::Concerns::SetUserByToken

      helper_method :current_user

      rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
      rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

      protected

      def current_user
        current_api_v1_user
      end

      private

      def render_resource_error_message(resource, status= 422)
        render json: {
            errors: resource.errors.full_messages
        }, status: status
      end

      def render_error_message(errors='', status=422)
        render json: {
          errors: errors.is_a?(Array) ? errors : [errors]
        }, status: status
      end

      def render_unprocessable_entity_response(exception)
        render_error_message( exception.record.errors)
      end
    
      def render_not_found_response(exception)
        render_error_message(exception.message)
      end
    end
  end
end

