## Get Started

### 1. Install WSL

``` sh
# Show available distributions
wsl --list --online
# Install desired distribution, e.g. Ubuntu-22.04
wsl --install -d <DistroName>
# Enter the distribution
wsl -d <DistroName>
```

### 2. Install Jekyll on WSL

Ref: https://jekyllrb.com/docs/installation/ubuntu/

You might also need to setup proxy server on WSL.
``` sh
echo 'export http_proxy=http://{Username}:{Password}@{Proxy-server-IP}:{Port}' >> ~/.bashrc
echo 'export https_proxy=http://{Username}:{Password}@{Proxy-server-IP}:{Port}' >> ~/.bashrc
source ~/.bashrc
```

``` sh
# Inside wsl, install necessary pacakges
sudo apt-get install ruby-full build-essential zlib1g-dev

# Set up a gem installation directory for your user account
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Install Jekyll and Bundler
gem install jekyll bundler
```

### 3. Install packages and run server
```sh
# First time only: install packages
bundle install

# Start server
bundle exec jekyll serve
```

Visit: http://127.0.0.1:4000
