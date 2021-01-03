FactoryBot.define do
  factory :company do
    name { Faker::Company.name }
    url { Faker::Internet.url }
  end
end