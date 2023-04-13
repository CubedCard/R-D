package hva.derksen.jip.researchbe.controller;

import hva.derksen.jip.researchbe.model.User;
import hva.derksen.jip.researchbe.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository repository;

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return this.repository.getAll();
    }

    @GetMapping("/{name}")
    public User getUser(@PathVariable String name) {
        return this.repository.getUserByName(name);
    }

    @PostMapping()
    public boolean createUser(@RequestBody User user) {
        return this.repository.addUser(user);
    }
}
