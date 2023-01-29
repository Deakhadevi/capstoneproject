class ApplicationController < ActionController::Base
 def authenticate_user
    authenticate_user =Useraccount.find_by_id(session[:current_user_id])
 end

 def landingpage
    render html: "welcome to our Jobportal"
 end

end
