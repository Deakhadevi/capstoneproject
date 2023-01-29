class UserapplicationController < ApplicationController
  def index
    render json: Userapplication.all
  end
  def show
    v = Userapplication.find(params[:id].to_i)
    render json: v
  end
  def create
    p=Userapplication.create(
      'userid': params[:userid],
      'jobid': params[:jobid],
      'jobCode': params[:jobCode],
      'appliedDate': params[appliedDate],
      'candidateApplicationStatus': params['candidateApplicationStatus'],
      'location': params['location']
    )
    render json: "Data Added"
  end

  def update
    p = Userapplication.find(params[:id].to_i)
        p.update(
        'userid': params[:userid],
        'jobid': params[:jobid],
        'jobCode': params[:jobCode],
        'appliedDate': params[appliedDate],
        'candidateApplicationStatus': params['candidateApplicationStatus'],
        'location': params['location']

        )

          render json: "Data Updated"
end
def destroy
    p = Userapplication.find(params[:id])
    p.destroy
    render json: "Data Deleted"
end
end
