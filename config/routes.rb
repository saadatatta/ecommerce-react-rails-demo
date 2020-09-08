Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    namespace :v1 do

    end
  end

  # Redirect all requests which are not api to react frontend
  get '/*path' => 'homepage#index'
  root 'homepage#index'
end
