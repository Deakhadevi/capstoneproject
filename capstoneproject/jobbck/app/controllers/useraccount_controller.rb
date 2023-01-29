require 'bcrypt'
class UseraccountController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: Useraccount.all
        # current_user =Useraccount.find_by_id(session[:current_user_id])
        # render json: current_user
  end

  def show
    v = Useraccount.find(params[:id].to_i)
    render json: v
  end
  def create
    v = !params[:email].empty?  and !params[:password].nil?
    if (v)
          p=Useraccount.create(
         'email': params[:email],
         'password': params[:password],
         'usertype': params[:usertype]
          )
          puts p
          render json: "Data Added"
        else
          render json: "Data not added"
     end

  end
def update
    p = Useraccount.find(params[:id].to_i)
        p.update(
          'email': params[:email],
          'password': params[:password],
          'usertype': params[:usertype]
        )

          render json: "Data Updated"
end
def destroy
    p = Useraccount.find(params[:id])
    p.destroy
    render json: "Data Deleted"
end
end
