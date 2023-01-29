class AddApplicationStatusToJobdetails < ActiveRecord::Migration[7.0]
  def change
    add_column :jobdetails, :applicationStatus, :string
  end
end
