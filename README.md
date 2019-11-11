# kadaka-h5p

## First-time setup
- ```
  composer install
  ```
- Setup drupal site (Note: choose English as language)
- ```
  vendor/bin/drush ev '\Drupal::entityManager()->getStorage("shortcut_set")->load("default")->delete();'
  vendor/bin/drush cset system.site uuid <uuid> -y
  vendor/bin/drush cim -y
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
