require 'rails_helper'

RSpec.describe "Company", type: :request do
  before(:each) do
    @user = create :user_with_companies
    @login_params = {
      email: @user.email,
      password: @user.password
    }
    @company = @user.companies.first
  end

  describe "Destroy company" do
    describe "/api/v1/companies/:slug" do
      context "when company is valid" do
        before(:each) do
          @auth_tokens = auth_tokens_for_user(@login_params)
          delete "/api/v1/companies/#{@company.slug}", headers: @auth_tokens
        end

        it "returns status of 200" do
          expect(response).to have_http_status(200)
        end

        it "returns message of 'Company deleted successfully'" do
          expect(JSON.parse(response.body)["message"]).to eql "Company deleted successfully"
        end
      end

      context "when company is not valid" do
        before(:each) do
          @auth_tokens = auth_tokens_for_user(@login_params)
          delete "/api/v1/companies/dummyname", headers: @auth_tokens
        end

        it "returns status of 422" do
          expect(response).to have_http_status(422)
        end
      end

      context "when user is not authenticated" do
        before(:each) do
          delete "/api/v1/companies/#{@company.slug}"
        end

        it "returns status of 401" do
          expect(response).to have_http_status(401)
        end
      end
    end
  end
end