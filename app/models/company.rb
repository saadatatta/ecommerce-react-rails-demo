class Company < ApplicationRecord
  include Rails.application.routes.url_helpers

  validates_presence_of :name
  belongs_to :owner, class_name: 'User', foreign_key: :user_id

  has_one_attached :logo

  def logo_url
    url_for(self.logo)
  end

end
