require('jest-preset-angular/setup-env/zone');

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

if (typeof window.URL.createObjectURL === 'undefined') {
    Object.defineProperty(window.URL, 'createObjectURL', { value: jest.fn() });
}

if (typeof document.createRange === 'undefined') {
    document.createRange = () =>
        ({
            setStart: jest.fn(),
            setEnd: jest.fn(),
            commonAncestorContainer: {
                nodeName: 'BODY',
                ownerDocument: document,
            },
        }) as unknown as Range;
}
