Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create,:show]
    resources :admins, only: [:index,:create,:show,:destroy,:update]
    resources :restaurants, only: [:index, :show]
    resources :reservations, only: [:index,:create,:show,:destroy]
    resources :ratings, only: [:index,:create,:show,:destroy,:update]
    resources :favorites, only: [:index, :show, :create, :destroy]
    resource :session, only: [:create, :destroy]
  end

end
