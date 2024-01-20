routes
    - user
        - '/' : get home page
        - '/products' : view all available products(CRUD not allowed)
    
    - admin
        - GET/POST: '/admin/add-product': You can add one product in DB
        - GET/POST: '/admin/admin-products': You will all products as admin(CRUD) are allowed
        - GET/POST: '/admin/edit-product': You can edit the details of a single product
