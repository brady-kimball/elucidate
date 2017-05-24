Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :patch]
    resource :session, only: [:create, :destroy]
    resources :tracks, except: [:new, :edit]
    resources :annotations, except: [:new, :edit]
    resources :annotation_containers, only: [:create, :index, :destroy]
    resources :comments, except: [:new, :update, :edit]
  end
end
