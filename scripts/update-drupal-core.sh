#!/bin/bash

print_line() {
  echo '-----'
}

print_line
echo 'Updating Drupal core via Composer'
print_line

echo ''
chmod u+w ./web/sites/default
composer outdated "drupal/*"
composer update drupal/core "drupal/core-*" --with-all-dependencies
chmod u- ./web/sites/default
echo ''

echo ''
./vendor/bin/drush updatedb -y
./vendor/bin/drush cache:rebuild
echo ''
