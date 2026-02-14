# Image Segmentation Techniques

Image segmentation is the process of partitioning an image into multiple segments or regions, making it easier to analyze and understand. This note covers semantic segmentation, instance segmentation, and panoptic segmentation techniques.

## Types of Segmentation

### Semantic Segmentation

Assigns a class label to every pixel:

* All pixels of the same class get the same label
* No distinction between different instances
* Output: Single channel mask with class IDs

### Instance Segmentation

Identifies individual object instances:

* Separates different instances of the same class
* Combines detection and segmentation
* Output: Multiple masks, one per instance

### Panoptic Segmentation

Unified segmentation approach:

* Combines semantic and instance segmentation
* Every pixel gets a class label and instance ID
* Handles both "stuff" (sky, road) and "things" (cars, people)

## Semantic Segmentation Architectures

### Fully Convolutional Networks (FCN)

First end-to-end architecture for segmentation:

