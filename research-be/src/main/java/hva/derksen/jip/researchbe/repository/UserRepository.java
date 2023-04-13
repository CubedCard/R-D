package hva.derksen.jip.researchbe.repository;

import hva.derksen.jip.researchbe.model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepository {
    private List<User> users;

    public UserRepository() {
        this.users = new ArrayList<>();
    }

    public boolean addUser(User user) {
        return this.users.add(user);
    }

    public List<User> getAll() {
        return this.users;
    }

    public User getUserByName(String name) {
        for (User user : this.users) {
            if (user.getName() == null) {
                continue;
            }
            if (user.getName().equals(name)) {
                return user;
            }
        }
        return null;
    }
}
