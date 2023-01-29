require 'bcrypt'
class LoginController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    usr = Useraccount.find_by('email': params[:email])
        if (usr.nil?)
            render json: "User account does not exist"
          else
            if (usr.authenticate(params[:password]))
                session[:current_user_id] = usr.id

                render json: "Logged in successfully"
            else
                render json: "Incorrect Password"
            end
        end
    end

def destroy
    # session.delete(:current_user_id)
    render json: "Logged out successfully"
end
end
