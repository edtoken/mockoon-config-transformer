# Changelog

## [Unreleased]


## [2.0.0-beta.0] - 2023-10-01

### Migrate to version 2.0.0-beta.0
1. Bundle environments with `1.0.0` version
2. Extract environments with `2.0.0-beta.0` version

### Breaking changes
- The `method` directory template was changed `__:[method]` -> `___method` to make it compatible with windows machine. 
- The `responses` directory name was changed `__:[responses]` -> `___responses` to make it compatible with windows machine. 
- The route paths now ignore special characters and multiple spaces.
  > The output file name and path is still related to the route endpoint, but the escape function has fully changed, so it is not backward compatible with the previous one
- Test scripts and test structure were changed.

### Added
- Argument to enable the markdown docs generation (disabled by default)
- `--verbose` mode with extra details about bundle/extract progress
- POC usage flow on CI see [Use Cases](./README.md#use-cases)

### Changed
- Tests structure changed and improved
- Refactored escapePath method, improved performance, fixed windows special chars issues

### Deprecated
...

### Removed
- Automatic `documentation.md` file generation, use new arg `-d, --doc` for documentation generation see updated [CLI args](./README.md#cli)

### Fixed
- Issues with filenames on windows, `:,{,},...` special chars not removed from the dirname.

### Security
- Changed path of Mockoon routes with `../../` in the URI, fixed ability to override files not related to the project.


## [1.0.0] - 2023-09-25

### Added
...

### Changed
... 

### Deprecated
...

### Removed
...

### Fixed
...

### Security
...