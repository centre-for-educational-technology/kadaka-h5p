# kadaka-h5p

## First-time setup
- ```
  composer install
  ```
- Setup drupal site (Note: choose Estonian as language)
- ```
  vendor/bin/drush en h5p
  vendor/bin/drush en h5peditor
  vendor/bin/drush then bootstrap
  vendor/bin/drush config-set system.theme default bootstrap
  vendor/bin/drush cr
  ```
- Add Russian language from settings
- ```
  vendor/bin/drush cim
  ```

## Development

Make site settings up to date
```
vendor/bin/drush cim
```
Save changes to drupal layout, site settings etc
```
vendor/bin/drush cex
```
