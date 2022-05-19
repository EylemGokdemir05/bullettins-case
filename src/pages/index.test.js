describe('[pages] - HomePage', () => {
    test('should render correctly',()=>{
        const view=setup();
        expect(view).toMatchSnapshot();
    });
});