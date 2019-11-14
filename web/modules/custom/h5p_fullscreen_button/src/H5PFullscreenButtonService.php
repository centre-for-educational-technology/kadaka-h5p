<?php

namespace Drupal\h5p_fullscreen_button;

class H5PFullscreenButtonService {
  public function __construct() {

  }

  public function getLocalization() {
    return [
      'fullscreen' => t('Student view'),
      'fullscreenDescription' => t('Open in fullscreen'),
    ];
  }

}
