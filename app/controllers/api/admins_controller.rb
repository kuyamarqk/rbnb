class Api::AdminController < ApplicationRecord
    def show 
        @admin = User.find(params[:id])
    end 
        #:create,:show,:destroy,:update
end