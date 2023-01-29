class Userapplication < ApplicationRecord
belongs_to  :userprofile
belongs_to :jobdetail

UserApplication.joins(:userprofile, :jobdetail).select("useerapplication.*, userprofile.id,jobdetails.id,jobdetails.jobcode ,jobdetails.location")

end
