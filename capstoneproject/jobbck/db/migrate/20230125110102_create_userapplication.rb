class CreateUserapplication < ActiveRecord::Migration[7.0]
  def change
    create_table :userapplications do |t|
      t.integer :userid
      t.integer :jobid
      t.string :jobCode
      t.date :appliedDate
      t.string :candidateApplicationStatus
      t.string :location
      
      t.timestamps
    end
  end
end
