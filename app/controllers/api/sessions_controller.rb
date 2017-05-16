class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:username], params[:email], params[:password]
    )
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: "Invalid Username/Email/Password", status: 422
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render status: 404
    end
  end
end
