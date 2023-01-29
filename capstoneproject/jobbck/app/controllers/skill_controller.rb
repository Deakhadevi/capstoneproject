class SkillController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: Skill.all
  end

  def show
    v = Skill.find(params[:id].to_i)
    render json: v
  end

  def create
    v = !params[:skillname].nil?
    if (v)
          p=Skill.create(
         'skillname': params[:skillname],
        )
          puts p
          render json: "Data Added"
        else
          render json: "Data not added"
     end

  end

  def update
    p = Skill.find(params[:id].to_i)
        p.update(
          'skillname': params[:skillname],

        )

          render json: "Data Updated"
end
def destroy
    p = Skill.find(params[:id])
    p.destroy
    render json: "Data Deleted"
end
end
