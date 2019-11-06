# kadaka-h5p

## First-time setup
```
composer install
vendor/bin/drush en h5p
vendor/bin/drush en h5peditor
vendor/bin/drush then bootstrap
vendor/bin/drush config-set system.theme default bootstrap
vendor/bin/drush cr
```

## Development

- Make site settings up to date
```
vendor/bin/drush cim
```
- Save changes to drupal layout, site settings etc
```
vendor/bin/drush cex
```
