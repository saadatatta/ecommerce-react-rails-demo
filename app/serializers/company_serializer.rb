class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :url, :user_id, :logo_url
end
