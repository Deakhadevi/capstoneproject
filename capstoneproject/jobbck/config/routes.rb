Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "application#landingpage"
  resources :skill
  resources :useraccount
  resources :jobdetail
  resources :userprofile
  resources :userapplication
end
