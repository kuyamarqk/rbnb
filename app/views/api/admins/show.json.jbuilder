# json.extract! @user, :id, :email, :first_name, :last_name
json.partial! "api/admin/admin", user: @user


