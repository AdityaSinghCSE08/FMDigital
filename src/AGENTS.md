# AGENTS.md

## Build/Lint/Test Commands

- `npm start` - Start development server
- `npm run build` - Build production bundle
- `npm test` - Run all tests
- `npm test -- --watch` - Run tests in watch mode
- `npm test -- src/path/to/specific/test-file.test.tsx` - Run a single test file

## Code Style Guidelines

### Imports
- Use absolute imports when possible
- Group imports: React/core, third-party, internal
- Import types separately with `import type { }`

### Formatting
- Use TypeScript (.tsx) for all components
- Follow standard React component structure
- Use styled-components for styling
- Tailwind CSS is also available for utility classes

### Types
- Define types in separate files in `src/types/`
- Use TypeScript interfaces for component props
- Use TypeScript types for API responses

### Naming Conventions
- Components: PascalCase (.tsx files)
- Functions/variables: camelCase
- Interfaces: PascalCase with "Props" suffix for component props

### Error Handling
- Use try/catch blocks for API calls
- Implement proper error messages with cogo-toast

### UI Components
- Reusable UI components are in `src/ui/`
- Use React Hook Form for form handling
- Use react-select for dropdown components