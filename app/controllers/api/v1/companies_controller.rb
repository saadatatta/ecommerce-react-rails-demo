module Api
  module V1
    class CompaniesController < ApiController
      before_action :authenticate_api_v1_user!

      def index
        companies = current_user.companies
        render json: companies
      end

      def create
        @company = current_user.companies.create(company_params)
        if @company.persisted?
          render json: @company
        else
          render_resource_error_message(@company)
        end
      end

      def update

      end

      private

      def company_params
        params.permit(:name, :url, :user_id, :logo)
      end

    end
  end
end