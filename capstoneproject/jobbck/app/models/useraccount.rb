class Useraccount < ApplicationRecord
  has_secure_password
  validates :password,  presence: true
  validates :email, uniqueness: true
end
