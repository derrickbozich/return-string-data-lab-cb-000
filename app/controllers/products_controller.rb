class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def description
    product = Product.find_by_id(params['id'])
    if product
      render plain: product.description
    else
      render plain: 'cannot find product'
    end
  end

  def inventory
    product = Product.find_by_id(params['id'])
    if product
      render plain: product.inventory > 0
    else
      render plain: 'cannot find product'
    end
  end

  
  
end
