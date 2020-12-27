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
          if params[:logo].present? && params[:logo] != "null"
            begin
              @company.logo.attach(params[:logo])
            rescue Exception=>e
              render_error_message("something went wrong when uploading image")
              return
            end
          end
          render json: @company, status: :created
        else
          render_resource_error_message(@company)
        end
      end

      def update
        @company = current_user.companies.friendly.find(params[:id])
        if @company.update(company_params)
          if params[:logo].present? && params[:logo] != "null"
            begin
              @company.logo.attach(params[:logo])
            rescue Exception=>e
              render_error_message("something went wrong when uploading image")
              return
            end
          end
          render json: @company, status: :ok
        else
          render_resource_error_message(@company)
        end
      end

      def show
        company = Company.friendly.find(params[:id])
        if company.present?
          render json: company, status: 200
        end
      end

      def destroy
        company = Company.friendly.find(params[:id])
        if company.destroy
          render_message('Company deleted successfully')
        else
          render_error_message('There was error deleting company. Please try again')
        end
      end

      private

      def company_params
        params.permit(:name, :url, :user_id)
      end

    end
  end
end