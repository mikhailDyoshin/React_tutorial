
# Update your Ubuntu 22.04 operating system to make sure all existing packages are up to date
sudo apt update && sudo apt upgrade -y

# Download and execute the NodeSource installation script
curl -sL https://deb.nodesource.com/setup_18.x | sudo bash - 

# Installin Node.js and npm to the system
sudo apt install nodejs

# Check versions
node -v 
npm -v

# Install ReactJS packages
sudo npm install -g create-react-app

# Verify the installed version of create-react-app
create-react-app --version