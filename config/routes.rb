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

  post 'api/annotations/:id/upvote', to: 'annotations#upvote', as: 'upvote_annotation'
  post 'api/annotations/:id/downvote', to: 'annotations#downvote', as: 'downvote_annotation'
  post 'api/comments/:id/upvote', to: 'comments#upvote', as: 'upvote_comment'
  post 'api/comments/:id/downvote', to: 'comments#downvote', as: 'downvote_comment'
end
