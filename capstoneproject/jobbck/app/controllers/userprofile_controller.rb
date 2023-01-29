class UserprofileController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: Userprofile.all
  end
  def show
    v = Userprofile.find(params[:id].to_i)
    render json: v
  end
  def create
    v = !params[:firstName].empty? and !params[:lastName].empty? and !params[:email].empty? and !params[:currentCompany].empty? and !params[:resumeLink].empty?

    if (v)
          p=Userprofile.create(
         'firstName': params[:firstName],
         'lastName': params[:lastName],
         'email': params[:email],
         'contact': params[:contct],
         'address': params[:address],
         'about': params[:about],
         'profilePic': params[:profilepic],
         'currentCompany': params[:currentCompany],
         'ctc': params[:ctc],
         'experience': params[:experience],
         'currentRole': params[:currentRole],
         'skills': params[:skills],
         'resumeLink': params[:resumeLink],
         'expectedSalary': params[:expectedSalary],
         'preferredLocation': params[:preferredLocation]
        )
          puts p
          render json: "Data Added"
        else
          render json: "Data not added"
     end
  end

 def  update
  p = Userprofile.find(params[:id].to_i)
      p.update(
        'firstName': params[:firstName],
         'lastName': params[:lastName],
         'email': params[:email],
         'contact': params[:contct],
         'address': params[:address],
         'about': params[:about],
         'profilePic': params[:profilepic],
         'currentCompany': params[:currentCompany],
         'ctc': params[:ctc],
         'experience': params[:experience],
         'currentRole': params[:currentRole],
         'skills': params[:skills],
         'resumeLink': params[:resumeLink],
         'expectedSalary': params[:expectedSalary],
         'preferredLocation': params[:preferredLocation]
        )


        render json: "Data Updated"
end

  def destroy
    p = Userprofile.find(params[:id])
    p.destroy
    render json: "Data Deleted"
  end

end
