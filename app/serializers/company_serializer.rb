class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :user_id
end
