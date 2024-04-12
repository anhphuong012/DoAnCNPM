package com.example.reponsitory;

import com.example.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface UserReponsitory extends JpaRepository<User,Integer> {
    User getUserByPhone(String phone);
    User findUserByPhone(String phone);
//    @Query(
//            value = "select * from dbo_users",
//            nativeQuery = true)
//    List<User> getAllUser();


}
