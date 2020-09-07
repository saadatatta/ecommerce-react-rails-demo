Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

    end
  end

  # Redirect all requests which are not api to react frontend
  get '/*path' => 'homepage#index'
  root 'homepage#index'
end
