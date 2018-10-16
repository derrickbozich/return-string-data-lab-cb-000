class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def description
    product = Product.find_by_id(params['id'])
    if product
      render :plain product.description
    else
      render :plain 'couldn\'t find product'
    end
  end
  
end
