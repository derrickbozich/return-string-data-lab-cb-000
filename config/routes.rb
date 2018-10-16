Rails.application.routes.draw do
  get 'home', to: 'static#home'
  resources :orders
  resources :invoices
  resources :products, only: [:new, :index]
  get 'product/:id/description' => 'products#description', as: 'product_description'
end
