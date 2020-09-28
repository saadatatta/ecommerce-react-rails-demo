class Company < ApplicationRecord
  validates_presence_of :name
  belongs_to :owner, class_name: 'User', foreign_key: :user_id
end
