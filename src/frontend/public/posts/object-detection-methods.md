# Modern Object Detection Methods

Object detection is one of the most important tasks in computer vision, combining classification and localization to identify and locate multiple objects within an image. This note explores the evolution and current state-of-the-art methods.

## Problem Definition

Object detection requires:

1. **Classification**: What objects are present?
2. **Localization**: Where are they located?
3. **Multiple Objects**: Handle varying numbers of objects

Output format: `[class, confidence, x, y, width, height]`

## Two-Stage Detectors

### R-CNN Family

**R-CNN (2014)** - Region-based CNN:

