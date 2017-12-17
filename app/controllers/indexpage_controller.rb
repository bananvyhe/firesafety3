class IndexpageController < ApplicationController
	before_filter :authenticate_user!

  def index
  	@teams = Team.all
  end

  def show
  end

  def new
  	@team = Team.new
  end

  def edit
  end

  def create
  	@team = Team.new(team_params)

  	respond_to do |format|
  		if @team.save
  			format.html { redirect_to @team, notice: 'Team was succefully created.'}
  			format.json { render :show, status: :created, location: @team }
  		else
  			format.html { render :new }
  			format.json { render json: @team.errors, status: :unprocessable_entity }
  		end
  	end

  end

  def update
  	respond_to do |format|
  		if @team.update(team_params)
  			format.html { redirect_to @team, notice: 'Team was succefully updated.'}
  			format.json { render :show, status: :created, location: @team }
  		else
  			format.html { render :edit }
  			format.json { render json: @team.errors, status: :unprocessable_entity }
  		end
  	end
  end

  def destroy
  	@team.destroy
  	respond_to do |format|
  		if @team.update(team_params)
  			format.html { redirect_to @team, notice: 'Team was succefully destroyed.'}
  			format.json { head :no_content }
  		end
  	end
  end

  private
  	#use callbacks to share common setup constraints between actions.
  	def set_team
  		@team = Team.find(params[:id])
  	end

  	# never trust parametrs from the scary internet, only allow white list through.
  	def tam_params
  		params.require(:team).permit(:name, players_attributes: [:id, :name, :position, :_destroy])
  	end
end
