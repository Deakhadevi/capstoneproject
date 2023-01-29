class JobdetailController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: Jobdetail.all
  end
  def show
    v = Jobdetail.find(params[:id].to_i)
    render json: v
  end

  def create
    v = !params[:jobTitle].empty? and !params[:jobDescription].empty? and !params[:skillsRequired].empty? and !params[:applicationStatus].empty?
        if (v)
          p = Jobdetail.create(
         'jobTitle': params[:jobTitle],
         'jobDescription': params[:jobDescription],
         'companyName': params[:companyName],
         'location': params[:location],
         'jobType': params[:jobType],
         'salary': params[:salary],
         'postedDate': params[:profilepic],
         'domain': params[:domain],
         'jobCode': params[:ctc],
         'skillsRequired': params[:skillsRequired],
         'applicationStatus': params[:applicationStatus]
          )
          puts p
          render json: "Data Added"
        else
          render json: "Data not added"
     end
  end
  def  update
    p = Jobdetail.find(params[:id].to_i)
    p.update(
         'jobTitle': params[:jobTitle],
         'jobDescription': params[:jobDescription],
         'companyName': params[:companyName],
         'location': params[:location],
         'jobType': params[:jobType],
         'salary': params[:salary],
         'postedDate': params[:profilepic],
         'domain': params[:domain],
         'jobCode': params[:ctc],
         'skillsRequired': params[:skillsRequired],
         'applicationStatus': params[:applicationStatus]

          )
          render json: "Data Updated"
  end

  def destroy
    p = Jobdetail.find(params[:id])
    p.destroy
    render json: "Data Deleted"
  end
end
