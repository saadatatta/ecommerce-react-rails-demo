Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
      resources :users do
        get :logged_in, on: :collection
      end

      resources :companies, only: %i[create update destroy index show] do
      end
    end
  end

  # Redirect all requests which are not api to react frontend
  get '/*path', to: 'homepage#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }

  root 'homepage#index'

end
