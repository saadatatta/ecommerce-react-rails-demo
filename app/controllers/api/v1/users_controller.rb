module Api
  module V1
    class UsersController < ApiController
      before_action :authenticate_api_v1_user!

      def logged_in
        if current_user.present?
          render json: current_user, serializer: ::UserSerializer
        end
      end

    end
  end
end


