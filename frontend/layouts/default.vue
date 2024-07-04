<template>
    <header>
        <Navbar expand="lg" theme="light" background-color="light">
            <Container type="fluid" justify-content="center" >
                <NavbarBrand padding="x-3 y-2" margin="">Full Stack Developer Test</NavbarBrand>
            </Container>
        </Navbar>
    </header>
    
    <Container>
        <slot />
    </Container>
</template>