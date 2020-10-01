class CompanySerializer < ActiveModel::Serializer


  attributes :id, :name, :url, :user_id, :logo_url

end
